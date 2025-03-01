import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# StartWithClassicDesktopLifetime(AppBuilder, String[], ShutdownMode) Method


Starts the Application with a IClassicDesktopStyleApplicationLifetime, shows main window and runs application main loop.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static int StartWithClassicDesktopLifetime(
	this AppBuilder builder,
	string[] args,
	ShutdownMode shutdownMode
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function StartWithClassicDesktopLifetime ( 
	builder As AppBuilder,
	args As String(),
	shutdownMode As ShutdownMode
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member StartWithClassicDesktopLifetime : 
        builder : AppBuilder * 
        args : string[] * 
        shutdownMode : ShutdownMode -> int 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd>Application builder.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd>Startup arguments.</dd><dt>  <a href="T_Avalonia_Controls_ShutdownMode">ShutdownMode</a></dt><dd>Lifetime shutdown mode.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
Exit code.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions">ClassicDesktopStyleApplicationLifetimeExtensions Class</a>  
<a href="Overload_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime">StartWithClassicDesktopLifetime Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
