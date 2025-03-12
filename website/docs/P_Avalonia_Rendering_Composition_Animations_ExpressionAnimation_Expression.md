# Expression Property


The mathematical equation specifying how the animated value is calculated each frame. The Expression is the core of an <a href="T_Avalonia_Rendering_Composition_Animations_ExpressionAnimation">ExpressionAnimation</a> and represents the equation the system will use to calculate the value of the animation property each frame. The equation is set on this property in the form of a string. Although expressions can be defined by simple mathematical equations such as "2+2", the real power lies in creating mathematical relationships where the input values can change frame over frame.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string? Expression { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Expression As String
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Expression : string with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Animations/ExpressionAnimation.cs#L38" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_Composition_Animations_ExpressionAnimation">ExpressionAnimation Class</a>  
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  

