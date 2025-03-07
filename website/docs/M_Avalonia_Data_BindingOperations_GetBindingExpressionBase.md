# GetBindingExpressionBase Method


Retrieves the <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a> that is currently active on the specified property.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static BindingExpressionBase? GetBindingExpressionBase(
	AvaloniaObject target,
	AvaloniaProperty property
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetBindingExpressionBase ( 
	target As AvaloniaObject,
	property As AvaloniaProperty
) As BindingExpressionBase
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetBindingExpressionBase : 
        target : AvaloniaObject * 
        property : AvaloniaProperty -> BindingExpressionBase 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingOperations.cs#L119" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> from which to retrieve the binding expression.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The binding target property from which to retrieve the binding expression.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>  
The <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a> object that is active on the given property or null if no binding expression is active on the given property.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingOperations">BindingOperations Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
