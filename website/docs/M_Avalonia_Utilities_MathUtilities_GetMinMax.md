# GetMinMax Method


Gets the minimum and maximum from the specified numbers.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static (double min, double max) GetMinMax(
	double a,
	double b
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetMinMax ( 
	a As Double,
	b As Double
) As (min As Double, max As Double)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetMinMax : 
        a : float * 
        b : float -> ValueTuple<float, float> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/MathUtilities.cs#L353" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The first number.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The second number.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>, <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)  
A tuple containing the minimum and maximum of the two specified numbers.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_MathUtilities">MathUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

