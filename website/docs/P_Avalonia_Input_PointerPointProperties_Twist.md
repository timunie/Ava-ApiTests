# Twist Property


Gets the clockwise rotation in degrees of a pen device around its own major axis (such as when the user spins the pen in their fingers).



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public float Twist {
	get;
 }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Twist As Single
		Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Twist : float32 with 
		get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PointerPoint.cs#L84" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>  
A value between 0.0 and 359.0 in degrees of rotation. The default value is 0.0.

## See Also


#### Reference
<a href="T_Avalonia_Input_PointerPointProperties">PointerPointProperties Structure</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

