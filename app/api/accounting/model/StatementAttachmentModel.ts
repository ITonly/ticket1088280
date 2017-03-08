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

/**
 * 对账单附件信息
 */
export interface StatementAttachmentModel {
    /**
     * Id
     */
    id?: string;

    /**
     * AttachmentId
     */
    attachmentId?: string;

    /**
     * 列名
     */
    columnsName?: string;

    /**
     * 解析是否完成
     */
    parseStatus?: string;

    /**
     * 错误信息
     */
    errorMessage?: string;

    /**
     * 对账单记录
     */
    bankStatementModels?: Array<models.BankStatementModel>;

    /**
     * 对账单行数
     */
    statementRecords?: number;

    /**
     * 创建时间
     */
    createdOn?: Date;

    /**
     * 创建人
     */
    createdBy?: string;

}