/**
 * GuanPlus.Accounting.WebApi
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as models from './models';

export interface ReceivableTransactionModel {
    /**
     * 交易日期
     */
    accountTransDate?: Date;

    /**
     * 实体类型
     */
    entityType?: models.AccountTransactionTypeEnumModel;

    /**
     * 联系人
     */
    contact?: models.IdNameModel;

    /**
     * 银行账户
     */
    bankAccount?: models.IdNameModel;

    /**
     * 描述
     */
    description?: string;

    /**
     * 收款
     */
    receivableTransactionItemModels?: Array<models.ReceivableTransactionItemModel>;

    /**
     * 标签
     */
    tags?: Array<models.TagModel>;

    /**
     * 流水帐附件
     */
    accountAttachmentModels?: Array<models.AccountAttachmentModel>;

}
