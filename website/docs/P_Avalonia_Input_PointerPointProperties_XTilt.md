# XTilt Property


Gets the plane angle between the Y-Z plane and the plane that contains the Y axis and the axis of the input device (typically a pen/stylus).



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public float XTilt {
	get;
 }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property XTilt As Single
		Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member XTilt : float32 with 
		get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerPoint.cs#L100" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>  
The value is 0.0 when the finger or pen is perpendicular to the digitizer surface, between 0.0 and 90.0 when tilted to the right of perpendicular, and between 0.0 and -90.0 when tilted to the left of perpendicular. The default value is 0.0.

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties Structure</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

