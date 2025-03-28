# AffectsRender&lt;T&gt; Method


Marks a property as affecting the brush's visual representation.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsRender<T>(
	params AvaloniaProperty[] properties
)
where T : Effect

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsRender(Of T As Effect) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsRender : 
        properties : AvaloniaProperty[] -> unit  when 'T : Effect
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Effects/Effect.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## Remarks
After a call to this method in a brush's static constructor, any change to the property will cause the <a href="E_Avalonia_Media_Effect_Invalidated">Invalidated</a> event to be raised on the brush.

## See Also


#### Reference
<a href="T_Avalonia_Media_Effect">Effect Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

