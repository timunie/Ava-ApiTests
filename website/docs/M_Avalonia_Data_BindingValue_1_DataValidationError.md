# DataValidationError(Exception, Optional&lt;T&gt;) Method


Returns a binding value with a type of <a href="T_Avalonia_Data_BindingValueType">DataValidationError</a> or <a href="T_Avalonia_Data_BindingValueType">DataValidationErrorWithFallback</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static BindingValue<T> DataValidationError(
	Exception e,
	Optional<T> fallbackValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function DataValidationError ( 
	e As Exception,
	fallbackValue As Optional(Of T)
) As BindingValue(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member DataValidationError : 
        e : Exception * 
        fallbackValue : Optional<'T> -> BindingValue<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs#L408" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></dt><dd>The binding error.</dd><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_Data_BindingValue_1">T</a>)</dt><dd>The fallback value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="T_Avalonia_Data_BindingValue_1">T</a>)

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingValue_1">BindingValue(T) Structure</a>  
<a href="Overload_Avalonia_Data_BindingValue_1_DataValidationError">DataValidationError Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

