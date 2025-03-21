# AutoSuspendHelper Class


A ReactiveUI AutoSuspendHelper which initializes suspension hooks for Avalonia applications. Call its constructor in your app's composition root, before calling the RxApp.SuspensionHost.SetupDefaultSuspendResume method.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class AutoSuspendHelper : IEnableLogger, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class AutoSuspendHelper
	Implements IEnableLogger, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type AutoSuspendHelper = 
    class
        interface IEnableLogger
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AutoSuspendHelper.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AutoSuspendHelper</td></tr>
<tr><td><strong>Implements</strong></td><td>IEnableLogger, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AutoSuspendHelper__ctor">AutoSuspendHelper(IApplicationLifetime)</a></td>
<td>Initializes a new instance of the AutoSuspendHelper class.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AutoSuspendHelper_Dispose">Dispose()</a></td>
<td>Disposes internally stored observers.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AutoSuspendHelper_OnFrameworkInitializationCompleted">OnFrameworkInitializationCompleted()</a></td>
<td>Call this method in your App.OnFrameworkInitializationCompleted method.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  

