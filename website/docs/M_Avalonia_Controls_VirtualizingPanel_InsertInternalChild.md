# InsertInternalChild Method


Adds the specified <a href="T_Avalonia_Controls_Control">Control</a> to the <a href="P_Avalonia_Controls_Panel_Children">Children</a> collection of a <a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel</a> element at the specified index position.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected void InsertInternalChild(
	int index,
	Control control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Sub InsertInternalChild ( 
	index As Integer,
	control As Control
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InsertInternalChild : 
        index : int * 
        control : Control -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingPanel.cs#L158" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index position within the collection at which the child element is inserted.</dd><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control to add to the collection.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

