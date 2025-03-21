# Rotate3DTransition(TimeSpan, PageSlide.SlideAxis, Nullable&lt;Double&gt;) Constructor


Creates a new instance of the <a href="T_Avalonia_Animation_Rotate3DTransition">Rotate3DTransition</a>



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Rotate3DTransition(
	TimeSpan duration,
	PageSlide.SlideAxis orientation = PageSlide.SlideAxis.Horizontal,
	double? depth = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	duration As TimeSpan,
	Optional orientation As PageSlide.SlideAxis = PageSlide.SlideAxis.Horizontal,
	Optional depth As Double? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        duration : TimeSpan * 
        ?orientation : PageSlide.SlideAxis * 
        ?depth : Nullable<float> 
(* Defaults:
        let _orientation = defaultArg orientation PageSlide.SlideAxis.Horizontal
        let _depth = defaultArg depth null
*)
-> Rotate3DTransition
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/Transitions/Rotate3DTransition.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd>How long the rotation should take place</dd><dt>  <a href="T_Avalonia_Animation_PageSlide_SlideAxis">PageSlide.SlideAxis</a>  (Optional)</dt><dd>The orientation of the rotation</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)  (Optional)</dt><dd>Defines the depth of the 3D Effect. If null, depth will be calculated automatically from the width or height of the common parent of the visual being rotated</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Animation_Rotate3DTransition">Rotate3DTransition Class</a>  
<a href="Overload_Avalonia_Animation_Rotate3DTransition__ctor">Rotate3DTransition Overload</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  

