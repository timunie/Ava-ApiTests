# OnDetachedFromVisualTree Method


Called when the control is removed from a rooted visual tree.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnDetachedFromVisualTree(
	VisualTreeAttachmentEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnDetachedFromVisualTree ( 
	e As VisualTreeAttachmentEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnDetachedFromVisualTree : 
        e : VisualTreeAttachmentEventArgs -> unit 
override OnDetachedFromVisualTree : 
        e : VisualTreeAttachmentEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Visual.cs#L584" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_VisualTreeAttachmentEventArgs">VisualTreeAttachmentEventArgs</a></dt><dd>The event args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Visual">Visual Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

