# OnItemsControlChanged Method


Called when the <a href="P_Avalonia_Controls_VirtualizingPanel_ItemsControl">ItemsControl</a> that owns the panel changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnItemsControlChanged(
	ItemsControl? oldValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnItemsControlChanged ( 
	oldValue As ItemsControl
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnItemsControlChanged : 
        oldValue : ItemsControl -> unit 
override OnItemsControlChanged : 
        oldValue : ItemsControl -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingPanel.cs#L118" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a></dt><dd>The old value of the <a href="P_Avalonia_Controls_VirtualizingPanel_ItemsControl">ItemsControl</a> property.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

