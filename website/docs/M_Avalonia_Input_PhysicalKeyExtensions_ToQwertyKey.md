# ToQwertyKey Method


Maps a physical key to a corresponding key, if possible, on a QWERTY keyboard.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Key ToQwertyKey(
	this PhysicalKey physicalKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function ToQwertyKey ( 
	physicalKey As PhysicalKey
) As Key
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member ToQwertyKey : 
        physicalKey : PhysicalKey -> Key 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/PhysicalKeyExtensions.cs#L14" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_PhysicalKey">PhysicalKey</a></dt><dd>the physical key to map.</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_Key">Key</a>  
The key corresponding to *physicalKey*, or <a href="T_Avalonia_Input_Key">None</a>.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Input_PhysicalKey">PhysicalKey</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Input_PhysicalKeyExtensions">PhysicalKeyExtensions Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
