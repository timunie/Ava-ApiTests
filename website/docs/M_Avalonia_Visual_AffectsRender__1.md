# AffectsRender&lt;T&gt; Method


Indicates that a property change should cause <a href="M_Avalonia_Visual_InvalidateVisual">InvalidateVisual()</a> to be called.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsRender<T>(
	params AvaloniaProperty[] properties
)
where T : Visual

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsRender(Of T As Visual) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsRender : 
        properties : AvaloniaProperty[] -> unit  when 'T : Visual
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Visual.cs#L407" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The control which the property affects.</dd></dl>This method should be called in a control's static constructor with each property on the control which when changed should cause a redraw. This is similar to WPF's FrameworkPropertyMetadata.AffectsRender flag.

## See Also


#### Reference
<a href="T_Avalonia_Visual">Visual Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

