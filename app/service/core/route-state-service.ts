import { Injectable } from '@angular/core';

@Injectable()
export class RouteStateService {
    selectedIndex: number = 0;
    transaction: Object = {};
    accountTransLineItemModels: Array<any> = [];
    accountTransLineItem: Object = {
        id: 0,
        amount: null,
        department: {
            id: '',
            name: '选择部门',
        },
        businessCategory: {
            id: '',
            name: '选择类别',
            businessCategoryType: {
                value: 'Income'
            },
            parentBusinessCategoryModelId: '',
            level: 1,
        },
        description: '',
        accountTransactionModel: {},
        order: 0,
        levelOneSelectedIndex: 0,
        levelTwoSelectedIndex: 0,
        departmentSelectedIndex: 0,
        needBusinessCategory: false,
        needDepartment: false,
        needAmount: false
    };


    setTransaction(key, value) {
        this.transaction[key] = value;
    }

    getTransaction(key) {
        let transaction = this.transaction[key];
        if (transaction) {
            let amount = transaction.amount;
            if (amount) {
                transaction.amount = amount.toFixed(2);
            }
        }
        return transaction;

    }
    setSelectedIndex(value) {
        this.selectedIndex = value;
    }

    getSelectedIndex() {
        return this.selectedIndex;
    }


    setTransItemModels(value) {
        this.accountTransLineItemModels = value;
    }

    getTransItemModels() {
        if (this.accountTransLineItemModels.length === 0) {
            this.accountTransLineItemModels.push(this.accountTransLineItem);
        }
        return this.accountTransLineItemModels;
    }

    clear() {
        this.accountTransLineItemModels = [];
        this.transaction = {};
    }

}
