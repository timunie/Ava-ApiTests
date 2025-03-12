# AffectsParentMeasure&lt;TPanel&gt; Method


Marks a property on a child as affecting the parent panel's measurement.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsParentMeasure<TPanel>(
	params AvaloniaProperty[] properties
)
where TPanel : Panel

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsParentMeasure(Of TPanel As Panel) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsParentMeasure : 
        properties : AvaloniaProperty[] -> unit  when 'TPanel : Panel
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Panel.cs#L121" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Panel">Panel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

