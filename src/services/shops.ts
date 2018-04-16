
import {Shop} from "../data/shopInterface";
import shops from '../data/shops';


export class ShopService{
  private shops: Shop[] = shops;

  getShop(id: number){
    return this.shops.find((shop: Shop) => {
      return shop.id == id;
    });
  }

  getAllShops(){return this.shops};

  addShop(shop:Shop){
      shops.push(shop);
  }

  getNextId(){
      return shops[shops.length-1].id+1;
  }

}
