# ClearItemContainer Method


Undoes the effects of the <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a> method.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ClearItemContainer(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ClearItemContainer ( 
	container As Control
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ClearItemContainer : 
        container : Control -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Generators/ItemContainerGenerator.cs#L158" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container control.</dd></dl>

## Remarks
This method must be called when a container is unrealized. The container must have already have been removed from the virtualizing panel's list of realized containers before this method is called. This method must not be called if <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> returned false for the item.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  

