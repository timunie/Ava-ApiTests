# PageSlide(TimeSpan, PageSlide.SlideAxis) Constructor


Initializes a new instance of the <a href="T_Avalonia_Animation_PageSlide">PageSlide</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PageSlide(
	TimeSpan duration,
	PageSlide.SlideAxis orientation = PageSlide.SlideAxis.Horizontal
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	duration As TimeSpan,
	Optional orientation As PageSlide.SlideAxis = PageSlide.SlideAxis.Horizontal
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        duration : TimeSpan * 
        ?orientation : PageSlide.SlideAxis 
(* Defaults:
        let _orientation = defaultArg orientation PageSlide.SlideAxis.Horizontal
*)
-> PageSlide
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/PageSlide.cs#L57" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd>The duration of the animation.</dd><dt>  <a href="T_Avalonia_Animation_PageSlide_SlideAxis">PageSlide.SlideAxis</a>  (Optional)</dt><dd>The axis on which the animation should occur</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Animation_PageSlide">PageSlide Class</a>  
<a href="Overload_Avalonia_Animation_PageSlide__ctor">PageSlide Overload</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  
