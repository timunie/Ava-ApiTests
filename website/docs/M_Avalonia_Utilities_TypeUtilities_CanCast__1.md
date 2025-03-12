# CanCast&lt;T&gt; Method


Returns a value indicating whether value can be casted to the specified type. If value is null, checks if instances of that type can be null.



## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool CanCast<T>(
	Object? value
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function CanCast(Of T) ( 
	value As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member CanCast : 
        value : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/TypeUtilities.cs#L118" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to check if cast possible</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type to cast to</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the cast is possible, otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Utilities_TypeUtilities">TypeUtilities Class</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

