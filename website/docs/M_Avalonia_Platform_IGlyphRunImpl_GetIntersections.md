# GetIntersections Method


Gets the intersections of specified upper and lower limit.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IReadOnlyList<float> GetIntersections(
	float lowerLimit,
	float upperLimit
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetIntersections ( 
	lowerLimit As Single,
	upperLimit As Single
) As IReadOnlyList(Of Single)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetIntersections : 
        lowerLimit : float32 * 
        upperLimit : float32 -> IReadOnlyList<float32> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGlyphRunImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a></dt><dd>Upper limit.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a></dt><dd>Lower limit.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>)  


## See Also


#### Reference
<a href="T_Avalonia_Platform_IGlyphRunImpl">IGlyphRunImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
