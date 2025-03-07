# LayoutManager Class


Manages measuring and arranging of controls.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class LayoutManager : ILayoutManager, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class LayoutManager
	Implements ILayoutManager, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type LayoutManager = 
    class
        interface ILayoutManager
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutManager.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  LayoutManager</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Layout_ILayoutManager">ILayoutManager</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Layout_LayoutManager__ctor">LayoutManager(ILayoutRoot)</a></td>
<td>Initializes a new instance of the LayoutManager class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Layout_LayoutManager_Dispose">Dispose()</a></td>
<td>Releases all resources used by the LayoutManager</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutManager_ExecuteInitialLayoutPass">ExecuteInitialLayoutPass()</a></td>
<td>Executes the initial layout pass on a layout root.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutManager_ExecuteLayoutPass">ExecuteLayoutPass()</a></td>
<td>Executes a layout pass.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Layout_LayoutManager_InvalidateArrange">InvalidateArrange(Layoutable)</a></td>
<td>Notifies the layout manager that a control requires an arrange.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_LayoutManager_InvalidateMeasure">InvalidateMeasure(Layoutable)</a></td>
<td>Notifies the layout manager that a control requires a measure.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Layout_LayoutManager_LayoutUpdated">LayoutUpdated</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
