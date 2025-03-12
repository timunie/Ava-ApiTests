# WithValue Method


Returns a new binding value with the specified value.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public BindingValue<T> WithValue(
	T value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function WithValue ( 
	value As T
) As BindingValue(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member WithValue : 
        value : 'T -> BindingValue<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs#L181" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_BindingValue_1">T</a></dt><dd>The new value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="T_Avalonia_Data_BindingValue_1">T</a>)  
The new binding value.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The binding type is <a href="T_Avalonia_Data_BindingValueType">UnsetValue</a> or <a href="T_Avalonia_Data_BindingValueType">DoNothing</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingValue_1">BindingValue(T) Structure</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

