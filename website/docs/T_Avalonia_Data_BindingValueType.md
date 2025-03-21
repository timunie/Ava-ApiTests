# BindingValueType Enumeration


Describes the type of a <a href="T_Avalonia_Data_BindingValue_1">BindingValue(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[FlagsAttribute]
public enum BindingValueType
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<FlagsAttribute>
Public Enumeration BindingValueType
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<FlagsAttribute>]
type BindingValueType
```
</TabItem>
</Tabs>



## Members
<table>
<tr>
<td>UnsetValue</td>
<td>0</td>
<td>An unset value: the target property will revert to its unbound state until a new binding value is produced.</td>
</tr>
<tr>
<td>DoNothing</td>
<td>1</td>
<td>Do nothing: the binding value will be ignored.</td>
</tr>
<tr>
<td>TypeMask</td>
<td>255</td>
<td> </td>
</tr>
<tr>
<td>HasValue</td>
<td>256</td>
<td> </td>
</tr>
<tr>
<td>Value</td>
<td>258</td>
<td>A simple value.</td>
</tr>
<tr>
<td>HasError</td>
<td>512</td>
<td> </td>
</tr>
<tr>
<td>BindingError</td>
<td>515</td>
<td>A binding error, such as a missing source property.</td>
</tr>
<tr>
<td>DataValidationError</td>
<td>516</td>
<td>A data validation error.</td>
</tr>
<tr>
<td>BindingErrorWithFallback</td>
<td>771</td>
<td>A binding error with a fallback value.</td>
</tr>
<tr>
<td>DataValidationErrorWithFallback</td>
<td>772</td>
<td>A data validation error with a fallback value.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

