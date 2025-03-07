# Scaling Property


Gets the scaling factor applied to the screen by the operating system.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public double Scaling \{ get; protected set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Scaling As Double
	Get
	Protected Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Scaling : float with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Screen.cs#L67" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>Multiply this value by 100 to get a percentage. Both X and Y scaling factors are assumed uniform.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Screen">Screen Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
