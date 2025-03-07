# ImmutableSolidColorBrush(Color, Double, ImmutableTransform) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_Immutable_ImmutableSolidColorBrush">ImmutableSolidColorBrush</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ImmutableSolidColorBrush(
	Color color,
	double opacity = 1,
	ImmutableTransform? transform = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	color As Color,
	Optional opacity As Double = 1,
	Optional transform As ImmutableTransform = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        color : Color * 
        ?opacity : float * 
        ?transform : ImmutableTransform 
(* Defaults:
        let _opacity = defaultArg opacity 1
        let _transform = defaultArg transform null
*)
-> ImmutableSolidColorBrush
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Immutable/ImmutableSolidColorBrush.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The color to use.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>  (Optional)</dt><dd>The opacity of the brush.</dd><dt>  <a href="T_Avalonia_Media_Immutable_ImmutableTransform">ImmutableTransform</a>  (Optional)</dt><dd>The transform of the brush.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Immutable_ImmutableSolidColorBrush">ImmutableSolidColorBrush Class</a>  
<a href="Overload_Avalonia_Media_Immutable_ImmutableSolidColorBrush__ctor">ImmutableSolidColorBrush Overload</a>  
<a href="N_Avalonia_Media_Immutable">Avalonia.Media.Immutable Namespace</a>  
