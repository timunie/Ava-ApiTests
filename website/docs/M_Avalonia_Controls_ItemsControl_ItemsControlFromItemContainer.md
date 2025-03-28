# ItemsControlFromItemContainer Method


Returns the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> that owns the specified container control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ItemsControl? ItemsControlFromItemContainer(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ItemsControlFromItemContainer ( 
	container As Control
) As ItemsControl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ItemsControlFromItemContainer : 
        container : Control -> ItemsControl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L335" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>  
The owning <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> or null if the control is not an items container.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

