import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ClassicDesktopStyleApplicationLifetimeExtensions Class


IClassicDesktopStyleApplicationLifetime related AppBuilder extensions.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class ClassicDesktopStyleApplicationLifetimeExtensions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public NotInheritable Class ClassicDesktopStyleApplicationLifetimeExtensions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
[<ExtensionAttribute>]
type ClassicDesktopStyleApplicationLifetimeExtensions = class end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ClassicDesktopStyleApplicationLifetimeExtensions</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_SetupWithClassicDesktopLifetime">SetupWithClassicDesktopLifetime</a></td>
<td>Setups the Application with a IClassicDesktopStyleApplicationLifetime, but doesn't show the main window and doesn't run application main loop.</td>
</tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime">StartWithClassicDesktopLifetime(AppBuilder, String[], ShutdownMode)</a></td>
<td>Starts the Application with a IClassicDesktopStyleApplicationLifetime, shows main window and runs application main loop.</td>
</tr>
<tr>
<td><a href="M_Avalonia_ClassicDesktopStyleApplicationLifetimeExtensions_StartWithClassicDesktopLifetime_1">StartWithClassicDesktopLifetime(AppBuilder, String[], Action(IClassicDesktopStyleApplicationLifetime))</a></td>
<td>Starts the Application with a IClassicDesktopStyleApplicationLifetime, shows main window and runs application main loop.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  
