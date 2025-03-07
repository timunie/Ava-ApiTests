# ValueFromDistance Method


Calculates the change in the <a href="P_Avalonia_Controls_Primitives_Track_Value">Value</a> of the <a href="T_Avalonia_Controls_Primitives_Track">Track</a> when the <a href="P_Avalonia_Controls_Primitives_Track_Thumb">Thumb</a> moves.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual double ValueFromDistance(
	double horizontal,
	double vertical
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Function ValueFromDistance ( 
	horizontal As Double,
	vertical As Double
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ValueFromDistance : 
        horizontal : float * 
        vertical : float -> float 
override ValueFromDistance : 
        horizontal : float * 
        vertical : float -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/Track.cs#L174" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The horizontal displacement of the thumb.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The vertical displacement of the thumb.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_Track">Track Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
