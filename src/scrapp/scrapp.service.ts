import { MarketsAvailableIds } from './../constants/products';
import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { allProducts } from 'src/constants/products';
@Injectable()
export class ScrappService {
  private products = [];
  private product = {
    name: '',
    markets: [],
  };

  async scrappAllProducts() {
    let counter = 0;
    for (const product of allProducts) {
      this.products.push({ name: product.name, marketPrices: [] });
      for (const market of product.markets) {
        const price = await this.handleMarkets(market.id, market.url);
        this.products[counter].marketPrices.push({ market: market.id, price });
      }
      counter++;
    }
    return this.products;
  }

  async scrapById(id) {
    for (const product of allProducts) {
      if (product.id === id) {
        this.product.name = product.name;
        for (const market of product.markets) {
          const price = await this.handleMarkets(market.id, market.url);
          this.product.markets.push({ market: market.id, price });
        }
      }
    }
    return this.product;
  }

  private async handleMarkets(
    marketId: MarketsAvailableIds,
    marketUrl: string,
  ) {
    switch (marketId) {
      case 'walmart':
        return await this.scrapWalmart(marketUrl);
      case 'soriana':
        return await this.scrapSoriana(marketUrl);
      case 'heb':
        return await this.scrapHbe(marketUrl);
      default:
        break;
    }
  }

  private async scrapWalmart(url: string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.goto(url);
    await page.waitForSelector('[itemprop=price]');
    const price = await page.evaluate(() => {
      return document?.querySelector('[itemprop=price]').textContent;
    });
    await browser.close();
    return price;
  }

  private async scrapSoriana(url: string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.goto(url, { waitUntil: 'load', timeout: 0 });
    const price = await page.evaluate(() => {
      const prices = document?.querySelectorAll('.price-plp');
      return prices[prices.length - 1].textContent;
    });
    await browser.close();
    return price;
  }

  private async scrapHbe(url: string) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.goto(url);
    const price = await page.evaluate(() => {
      return document?.querySelector('.price').textContent;
    });
    await browser.close();
    return price;
  }
}
