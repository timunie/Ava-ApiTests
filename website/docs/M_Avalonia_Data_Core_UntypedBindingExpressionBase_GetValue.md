# GetValue Method


Gets the current value of the binding expression.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? GetValue()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetValue As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetValue : unit -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/UntypedBindingExpressionBase.cs#L126" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The current value or <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a> if the binding was unable to read a value.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception" target="_blank" rel="noopener noreferrer">InvalidOperationException</a></td>
<td>The binding expression has not been started.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
