# AffectsParentArrange&lt;TPanel&gt; Method


Marks a property on a child as affecting the parent panel's arrangement.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsParentArrange<TPanel>(
	params AvaloniaProperty[] properties
)
where TPanel : Panel

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsParentArrange(Of TPanel As Panel) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsParentArrange : 
        properties : AvaloniaProperty[] -> unit  when 'TPanel : Panel
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Panel.cs#L106" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Panel">Panel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

