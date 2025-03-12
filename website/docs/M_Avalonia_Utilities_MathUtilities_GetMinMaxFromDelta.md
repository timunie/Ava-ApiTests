# GetMinMaxFromDelta Method


Gets the minimum and maximum from the specified number and the difference with that number.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static (double min, double max) GetMinMaxFromDelta(
	double initialValue,
	double delta
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetMinMaxFromDelta ( 
	initialValue As Double,
	delta As Double
) As (min As Double, max As Double)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetMinMaxFromDelta : 
        initialValue : float * 
        delta : float -> ValueTuple<float, float> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/MathUtilities.cs#L364" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The initial value to use.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The difference for <em>initialValue</em>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>, <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>)  
A tuple containing the minimum and maximum of the specified number and the difference with that number.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_MathUtilities">MathUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

