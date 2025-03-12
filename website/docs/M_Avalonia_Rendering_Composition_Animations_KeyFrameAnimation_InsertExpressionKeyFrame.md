# InsertExpressionKeyFrame Method


Inserts an expression keyframe.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void InsertExpressionKeyFrame(
	float normalizedProgressKey,
	string value,
	Easing? easingFunction = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub InsertExpressionKeyFrame ( 
	normalizedProgressKey As Single,
	value As String,
	Optional easingFunction As Easing = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InsertExpressionKeyFrame : 
        normalizedProgressKey : float32 * 
        value : string * 
        ?easingFunction : Easing 
(* Defaults:
        let _easingFunction = defaultArg easingFunction null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Animations/KeyFrameAnimation.cs#L81" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a></dt><dd>The time the key frame should occur at, expressed as a percentage of the animation Duration. Allowed value is from 0.0 to 1.0.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The expression used to calculate the value of the key frame.</dd><dt>  <a href="T_Avalonia_Animation_Easings_Easing">Easing</a>  (Optional)</dt><dd>The easing function to use when interpolating between frames.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation">KeyFrameAnimation Class</a>  
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  

