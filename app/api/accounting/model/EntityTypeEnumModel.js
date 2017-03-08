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
var EntityTypeEnumModel;
(function (EntityTypeEnumModel) {
    var ValueEnum;
    (function (ValueEnum) {
        ValueEnum[ValueEnum["None"] = 'None'] = "None";
        ValueEnum[ValueEnum["Income"] = 'Income'] = "Income";
        ValueEnum[ValueEnum["Outcome"] = 'Outcome'] = "Outcome";
        ValueEnum[ValueEnum["Receivable"] = 'Receivable'] = "Receivable";
        ValueEnum[ValueEnum["Payable"] = 'Payable'] = "Payable";
    })(ValueEnum = EntityTypeEnumModel.ValueEnum || (EntityTypeEnumModel.ValueEnum = {}));
})(EntityTypeEnumModel = exports.EntityTypeEnumModel || (exports.EntityTypeEnumModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5VHlwZUVudW1Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eVR5cGVFbnVtTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQWdCSCxJQUFpQixtQkFBbUIsQ0FRbkM7QUFSRCxXQUFpQixtQkFBbUI7SUFDaEMsSUFBWSxTQU1YO0lBTkQsV0FBWSxTQUFTO1FBQ2pCLDhCQUFhLE1BQU0sVUFBQSxDQUFBO1FBQ25CLGdDQUFlLFFBQVEsWUFBQSxDQUFBO1FBQ3ZCLGlDQUFnQixTQUFTLGFBQUEsQ0FBQTtRQUN6QixvQ0FBbUIsWUFBWSxnQkFBQSxDQUFBO1FBQy9CLGlDQUFnQixTQUFTLGFBQUEsQ0FBQTtJQUM3QixDQUFDLEVBTlcsU0FBUyxHQUFULDZCQUFTLEtBQVQsNkJBQVMsUUFNcEI7QUFDTCxDQUFDLEVBUmdCLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBUW5DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHdWFuUGx1cy5BY2NvdW50aW5nLldlYkFwaVxuICpcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiB2MVxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSB0aGUgc3dhZ2dlciBjb2RlIGdlbmVyYXRvciBwcm9ncmFtLlxuICogaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbi5naXRcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBtb2RlbHMgZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVR5cGVFbnVtTW9kZWwge1xuICAgIC8qKlxuICAgICAqIOS6pOaYk+aemuS4vuWAvFxuICAgICAqL1xuICAgIHZhbHVlPzogRW50aXR5VHlwZUVudW1Nb2RlbC5WYWx1ZUVudW07XG5cbiAgICAvKipcbiAgICAgKiDlkI3np7BcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuXG59XG5leHBvcnQgbmFtZXNwYWNlIEVudGl0eVR5cGVFbnVtTW9kZWwge1xuICAgIGV4cG9ydCBlbnVtIFZhbHVlRW51bSB7XG4gICAgICAgIE5vbmUgPSA8YW55PiAnTm9uZScsXG4gICAgICAgIEluY29tZSA9IDxhbnk+ICdJbmNvbWUnLFxuICAgICAgICBPdXRjb21lID0gPGFueT4gJ091dGNvbWUnLFxuICAgICAgICBSZWNlaXZhYmxlID0gPGFueT4gJ1JlY2VpdmFibGUnLFxuICAgICAgICBQYXlhYmxlID0gPGFueT4gJ1BheWFibGUnXG4gICAgfVxufVxuIl19