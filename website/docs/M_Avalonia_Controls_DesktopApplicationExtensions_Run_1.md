import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Run(Application, ICloseable) Method


On desktop-style platforms runs the application's main loop until closable is closed



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void Run(
	this Application app,
	ICloseable closable
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Sub Run ( 
	app As Application,
	closable As ICloseable
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member Run : 
        app : Application * 
        closable : ICloseable -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Application">Application</a></dt><dd> </dd><dt>  ICloseable</dt><dd> </dd></dl>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Application">Application</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.Consider using StartWithDesktopStyleLifetime instead, see https://github.com/AvaloniaUI/Avalonia/wiki/Application-lifetimes for details

## See Also


#### Reference
<a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions Class</a>  
<a href="Overload_Avalonia_Controls_DesktopApplicationExtensions_Run">Run Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
