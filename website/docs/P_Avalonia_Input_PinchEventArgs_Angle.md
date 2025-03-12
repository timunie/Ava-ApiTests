# Angle Property


Gets the angle of the pinch gesture, in degrees.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public double Angle { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Angle As Double
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Angle : float with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PinchEventArgs.cs#L31" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>A pinch gesture is the movement of two pressed points closer together. This property is the measured angle of the line between those two points. Remember zero degrees is a line pointing up.

## See Also


#### Reference
<a href="T_Avalonia_Input_PinchEventArgs">PinchEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

