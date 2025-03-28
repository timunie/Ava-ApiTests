# Equality Operator


Compares two <a href="T_Avalonia_Data_Optional_1">Optional(T)</a>s for equality.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator ==(
	Optional<T> x,
	Optional<T> y
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator = ( 
	x As Optional(Of T),
	y As Optional(Of T)
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (=)
        x : Optional<'T> * 
        y : Optional<'T>  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Optional.cs#L132" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_Data_Optional_1">T</a>)</dt><dd>The first value.</dd><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_Data_Optional_1">T</a>)</dt><dd>The second value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the values are equal; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Data_Optional_1">Optional(T) Structure</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

