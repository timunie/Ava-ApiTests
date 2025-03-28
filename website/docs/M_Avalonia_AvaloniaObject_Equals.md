# Equals Method


Compares two objects using reference equality.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override sealed bool Equals(
	Object? obj
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides NotOverridable Function Equals ( 
	obj As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Equals : 
        obj : Object -> bool 
override Equals : 
        obj : Object -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L195" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object to compare.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
Overriding Equals and GetHashCode on an AvaloniaObject is disallowed for two reasons: - AvaloniaObjects are by their nature mutable - The presence of attached properties means that the semantics of equality are difficult to define See https://github.com/AvaloniaUI/Avalonia/pull/2747 for the discussion that prompted this.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

