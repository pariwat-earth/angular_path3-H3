import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

//โครงสร้างTree
interface TeeView {
  name: string;
  icon_name: string;
  path: string;
  children?: TeeView[];
}

//รายละเอียดปุ่ม
const TREE_DATA: TeeView[] = [
  {
    name: 'Catalog',
    icon_name: 'book',
    path: '',
    children: [
      { name: 'Product', icon_name: 'adjust',path: '/products' },
      { name: 'Categories', icon_name: 'adjust',path: '/catalog',},
      { name: 'Manufacturers', icon_name: 'adjust' ,path: '',},
      { name: 'Product reviews', icon_name: 'adjust' ,path: '',},
      { name: 'Product tags', icon_name: 'adjust' ,path: '',},
      {
        name: 'Attributes',
        icon_name: 'adjust',
        path: '',
        children: [
          { name: 'Product attributes', icon_name: 'panorama_fish_eye' ,path: '',},
          { name: 'Specification attributes', icon_name: 'panorama_fish_eye' ,path: '',},
          { name: 'Checkout attributes', icon_name: 'panorama_fish_eye' ,path: ''},
        ],
      },
    ]
  },
  {
    name: 'Sales',
    icon_name: 'shopping_cart',
    path: '',
    children: [
      { name: 'Orders', icon_name: 'adjust' ,path: '',},
      { name: 'Shipments', icon_name: 'adjust' ,path: '',},
      { name: 'Return requests', icon_name: 'adjust' ,path: '',},
      { name: 'Recurring payments', icon_name: 'adjust' ,path: '',},
      { name: 'Gift cards', icon_name: 'adjust' ,path: '',},
      { name: 'Shopping carts and wishlists', icon_name: 'adjust' ,path: '',},
    ]
  },
  {
    name: 'Customers',
    icon_name: 'perm_identity',
    path: '',
    children: [
      { name: 'Customers', icon_name: 'adjust' ,path: '',},
      { name: 'Customers roles', icon_name: 'adjust' ,path: '',},
      { name: 'Online customers', icon_name: 'adjust' ,path: '',},
      { name: 'Vendors', icon_name: 'adjust' ,path: '',},
      { name: 'Activity log', icon_name: 'adjust' ,path: '',},
      { name: 'Activity Types', icon_name: 'adjust' ,path: '',},
      { name: 'GDPR requests(log)', icon_name: 'adjust' ,path: '',},
    ]
  },
  {
    name: 'Promotions',
    icon_name: 'local_offer',
    path: '',
    children: [
      { name: 'Discounts', icon_name: 'adjust' ,path: '',},
      { name: 'Affiliates', icon_name: 'adjust' ,path: '',},
      { name: 'Newsletter subscribers', icon_name: 'adjust' ,path: '',},
      { name: 'Campaigns', icon_name: 'adjust' ,path: '',},
    ]
  },
  {
    name: 'Content management',
    icon_name: 'record_voice_over',
    path: '',
    children: [
      { name: 'Topics(pages)', icon_name: 'adjust' ,path: '',},
      { name: 'Message templates', icon_name: 'adjust' ,path: '',},
      { name: 'News items', icon_name: 'adjust' ,path: '',},
      { name: 'News comments', icon_name: 'adjust' ,path: '',},
      { name: 'Blog posts', icon_name: 'adjust' ,path: '',},
      { name: 'Blog comments', icon_name: 'adjust' ,path: '',},
      { name: 'Polls', icon_name: 'adjust' ,path: '',},
      { name: 'Forums', icon_name: 'adjust' ,path: '',},
    ]
  },
  {
    name: 'Configuration',
    icon_name: 'settings',
    path: '',
    children:[
      {name: 'Setting',icon_name:'adjust',path: '',
      children:[
        {name:'General settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Customer settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Order settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Shipping settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Tex settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Catalog settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Shopping settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Reward settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'GDPR settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Vendor settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Blog settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'News settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Forum settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'Media settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'App settings', icon_name:'panorama_fish_eye',path: '',},
        {name:'All settings (advanced)', icon_name:'panorama_fish_eye',path: '',},
      ]},
      {name:'Email account',icon_name:'adjust',path: '',},
      {name:'Stores',icon_name:'adjust',path: '',},
      {name:'Countries',icon_name:'adjust',path: '',},
      {name:'Languages',icon_name:'adjust',path: '',},
      {name:'Currencies',icon_name:'adjust',path: '',},
      {name:'Payment methods',icon_name:'adjust',path: '',},
      {name:'Payment restrictions',icon_name:'adjust',path: '',},
      {name:'Tax providers',icon_name:'adjust',path: '',},
      {name:'Tax categories',icon_name:'adjust',path: '',},
      {name:'Shipping',icon_name:'adjust',path: '',children:[
        {name:'Shipping providers',icon_name:'panorama_fish_eye',path: '',},
        {name:'Warehouses',icon_name:'panorama_fish_eye',path: '',},
        {name:'Pickup points',icon_name:'panorama_fish_eye',path: '',},
        {name:'Dates abd ranges',icon_name:'panorama_fish_eye',path: '',},
        {name:'Measures',icon_name:'panorama_fish_eye',path: '',},
      ]},
      {name:'Access control list',icon_name:'adjust',path: '',},
      {name:'Widgets',icon_name:'adjust',path: '',},
      {name:'Authentication',icon_name:'adjust',path: '',children:[
        {name:'External authentication',icon_name:'panorama_fish_eye',path: '',},
        {name:'Multi-factor authentication',icon_name:'panorama_fish_eye',path: '',}
      ]},
      {name:'Local plugins',icon_name:'adjust',path: '',},
      {name:'All plugins and themes',icon_name:'adjust',path: '',},
    ]
  },
  {
    name:'System',
    icon_name:'computer',
    path: '',
    children:[
      {name:'System information',icon_name:"adjust",path: '',},
      {name:'Log',icon_name:"adjust",path: '',},
      {name:'Warning',icon_name:"adjust",path: '',},
      {name:'Message queue',icon_name:"adjust",path: '',},
      {name:'Schedule tasks',icon_name:"adjust",path: '',},
      {name:'Search engine friendly page manes',icon_name:"adjust",path: '',},
      {name:'Templates',icon_name:"adjust",path: '',},
    ]
  },
  {
    name:'Reports',
    icon_name:'trending_up',
    path: '',
    children:[
      {name:'Sales summary',icon_name:'adjust',path: '',},
      {name:'Low stock',icon_name:'adjust',path: '',},
      {name:'Bestsellers',icon_name:'adjust',path: '',},
      {name:'Products never purchased',icon_name:'adjust',path: '',},
      {name:'Country sales',icon_name:'adjust',path: '',},
      {name:'Customer reports',icon_name:'adjust',path: '',children:[
        {name:'Reistered',icon_name:'adjust',path: '',},
        {name:'Customers by order total',icon_name:'adjust',path: '',},
        {name:'Customers by number of orders',icon_name:'adjust',path: '',},
      ]},
    ]
  },
  {
    name:'Help',
    icon_name:'help',
    path: '',
    children:[
      {name:'Help',icon_name:'adjust',path: '',},
      {name:'Community forums',icon_name:'adjust',path: '',},
      {name:'Premium support services',icon_name:'adjust',path: '',},
    ]
  }

]

interface ShowFlatNode {
  expandable: boolean;
  name: string;
  icon_name: string;
  path: string;
  level: number;
}

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {

  private _transformer = (node: TeeView, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon_name: node.icon_name,
      path: node.path,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ShowFlatNode>(
    node => node.level, node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  opened = false;
  chk = false;

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ShowFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  navopen(tt: String) {
    if (this.opened == false) {
      this.opened = true;
      this.chk = true;
    } else {
      this.opened = false;
      this.chk = false;
    }
  }

  chkopened() {
    this.opened == false ? this.opened = true : this.opened = true;
  }

  chkclose() {
    this.chk == true ? this.opened = true : this.opened = false;
  }
}
