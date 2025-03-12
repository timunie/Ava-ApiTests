# OnAttachedToVisualTreeCore Method


Calls the <a href="M_Avalonia_Visual_OnAttachedToVisualTree">OnAttachedToVisualTree(VisualTreeAttachmentEventArgs)</a> method for this control and all of its visual descendants.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override sealed void OnAttachedToVisualTreeCore(
	VisualTreeAttachmentEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides NotOverridable Sub OnAttachedToVisualTreeCore ( 
	e As VisualTreeAttachmentEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnAttachedToVisualTreeCore : 
        e : VisualTreeAttachmentEventArgs -> unit 
override OnAttachedToVisualTreeCore : 
        e : VisualTreeAttachmentEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Control.cs#L372" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_VisualTreeAttachmentEventArgs">VisualTreeAttachmentEventArgs</a></dt><dd>The event args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Control">Control Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

