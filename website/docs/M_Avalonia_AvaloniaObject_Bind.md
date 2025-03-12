# Bind(AvaloniaProperty, IBinding) Method


Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public BindingExpressionBase Bind(
	AvaloniaProperty property,
	IBinding binding
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Bind ( 
	property As AvaloniaProperty,
	binding As IBinding
) As BindingExpressionBase
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Bind : 
        property : AvaloniaProperty * 
        binding : IBinding -> BindingExpressionBase 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L429" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd><dt>  <a href="T_Avalonia_Data_IBinding">IBinding</a></dt><dd>The binding.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>  
The binding expression which represents the binding instance on this object.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_Bind">Bind Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

