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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVtZW50Q29sdW1uTWFwcGluZ01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RhdGVtZW50Q29sdW1uTWFwcGluZ01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1YW5QbHVzLkFjY291bnRpbmcuV2ViQXBpXG4gKlxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IHYxXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuLmdpdFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIG1vZGVscyBmcm9tICcuL21vZGVscyc7XG5cbi8qKlxuICog5a+56LSm5Y2V5YiX5Yy56YWNTW9kZWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGF0ZW1lbnRDb2x1bW5NYXBwaW5nTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEJhbmtTdGF0ZW1lbnTooajnmoTorr7orqHliJflkI1cbiAgICAgKi9cbiAgICBiYW5rU3RhdGVtZW50Q29sdW1uPzogQXJyYXk8bW9kZWxzLkJhbmtTdGF0ZW1lbnRDb2x1bW5Db25zdE1vZGVsPjtcblxuICAgIC8qKlxuICAgICAqIOWIl+WMuemFjVxuICAgICAqL1xuICAgIGNvbHVtbnNNYXBwaW5nPzogQXJyYXk8bW9kZWxzLkNvbHVtbnNNYXBwaW5nTW9kZWw+O1xuXG4gICAgZGF0ZXRpbWVTdHJpbmdzPzogQXJyYXk8bW9kZWxzLklkTmFtZU1vZGVsPjtcblxuICAgIC8qKlxuICAgICAqIOWvuei0puWNlemZhOS7tiBJZFxuICAgICAqL1xuICAgIHN0YXRlbWVudEF0dGFjaG1lbnRJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIOi0puaIt0lkXG4gICAgICovXG4gICAgYmFua0FjY291bnRJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIOmZhOS7tuWtmOWCqOi3r+W+hFxuICAgICAqL1xuICAgIGtleT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIOmZhOS7tklkXG4gICAgICovXG4gICAgYXR0YWNobWVudElkPzogc3RyaW5nO1xuXG59XG4iXX0=