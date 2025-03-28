# GetHashCode Method


Gets the hash code for the object.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override sealed int GetHashCode()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides NotOverridable Function GetHashCode As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetHashCode : unit -> int 
override GetHashCode : unit -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L210" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## Remarks
Overriding Equals and GetHashCode on an AvaloniaObject is disallowed for two reasons: - AvaloniaObjects are by their nature mutable - The presence of attached properties means that the semantics of equality are difficult to define See https://github.com/AvaloniaUI/Avalonia/pull/2747 for the discussion that prompted this.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

