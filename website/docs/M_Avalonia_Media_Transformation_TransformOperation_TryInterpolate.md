# TryInterpolate Method


Attempts to interpolate between two transform operations.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool TryInterpolate(
	TransformOperation? from,
	TransformOperation? to,
	double progress,
	ref TransformOperation result
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TryInterpolate ( 
	from As TransformOperation?,
	to As TransformOperation?,
	progress As Double,
	ByRef result As TransformOperation
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TryInterpolate : 
        from : Nullable<TransformOperation> * 
        to : Nullable<TransformOperation> * 
        progress : float * 
        result : TransformOperation byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Transformation/TransformOperation.cs#L83" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a>)</dt><dd>Source operation.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a>)</dt><dd>Target operation.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>Interpolation progress.</dd><dt>  <a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation</a></dt><dd>Interpolation result that will be filled in when operation was successful.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>Based upon https://www.w3.org/TR/css-transforms-1/#interpolation-of-transform-functions.

## See Also


#### Reference
<a href="T_Avalonia_Media_Transformation_TransformOperation">TransformOperation Structure</a>  
<a href="N_Avalonia_Media_Transformation">Avalonia.Media.Transformation Namespace</a>  
