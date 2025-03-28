# CalculateDistanceFromRoot Method


Calculates the distance from a visual's root.



## Definition
**Namespace:** <a href="N_Avalonia_VisualTree">Avalonia.VisualTree</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static int CalculateDistanceFromRoot(
	Visual visual
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function CalculateDistanceFromRoot ( 
	visual As Visual
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member CalculateDistanceFromRoot : 
        visual : Visual -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/VisualTree/VisualExtensions.cs#L49" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The visual.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The number of steps from the visual to the root.

## See Also


#### Reference
<a href="T_Avalonia_VisualTree_VisualExtensions">VisualExtensions Class</a>  
<a href="N_Avalonia_VisualTree">Avalonia.VisualTree Namespace</a>  

