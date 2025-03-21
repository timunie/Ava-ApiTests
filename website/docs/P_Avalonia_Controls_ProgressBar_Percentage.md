# Percentage Property


Gets the overall percentage complete of the progress



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public double Percentage { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Percentage As Double
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Percentage : float with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ProgressBar.cs#L233" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

## Remarks
This read-only property is automatically calculated using the current <a href="P_Avalonia_Controls_Primitives_RangeBase_Value">Value</a> and the effective range (<a href="P_Avalonia_Controls_Primitives_RangeBase_Maximum">Maximum</a> - <a href="P_Avalonia_Controls_Primitives_RangeBase_Minimum">Minimum</a>).

## See Also


#### Reference
<a href="T_Avalonia_Controls_ProgressBar">ProgressBar Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

