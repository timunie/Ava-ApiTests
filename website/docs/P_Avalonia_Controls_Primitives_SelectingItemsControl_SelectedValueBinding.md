# SelectedValueBinding Property


Gets the <a href="T_Avalonia_Data_IBinding">IBinding</a> instance used to obtain the <a href="P_Avalonia_Controls_Primitives_SelectingItemsControl_SelectedValue">SelectedValue</a> property



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[AssignBindingAttribute]
[InheritDataTypeFromItemsAttribute("ItemsSource")]
public IBinding? SelectedValueBinding { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<AssignBindingAttribute>
<InheritDataTypeFromItemsAttribute("ItemsSource")>
Public Property SelectedValueBinding As IBinding
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AssignBindingAttribute>]
[<InheritDataTypeFromItemsAttribute("ItemsSource")>]
member SelectedValueBinding : IBinding with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/SelectingItemsControl.cs#L255" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Data_IBinding">IBinding</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

