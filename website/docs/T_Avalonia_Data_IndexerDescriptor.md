# IndexerDescriptor Class


Holds a description of a binding for <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>'s [] operator.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class IndexerDescriptor : IObservable<Object>, 
	IDescription
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class IndexerDescriptor
	Implements IObservable(Of Object), IDescription
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IndexerDescriptor = 
    class
        interface IObservable<Object>
        interface IDescription
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/IndexerDescriptor.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  IndexerDescriptor</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_IDescription">IDescription</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_IndexerDescriptor__ctor">IndexerDescriptor()</a></td>
<td>Initializes a new instance of the IndexerDescriptor class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_IndexerDescriptor_Description">Description</a></td>
<td>Gets a description of the binding.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_IndexerDescriptor_Mode">Mode</a></td>
<td>Gets or sets the binding mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_IndexerDescriptor_Priority">Priority</a></td>
<td>Gets or sets the binding priority.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_IndexerDescriptor_Property">Property</a></td>
<td>Gets or sets the source property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_IndexerDescriptor_Source">Source</a></td>
<td>Gets or sets the source object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_IndexerDescriptor_SourceObservable">SourceObservable</a></td>
<td>Gets or sets the source observable.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_IndexerDescriptor_Subscribe">Subscribe(IObserver(Object))</a></td>
<td>Notifies the provider that an observer is to receive notifications.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_IndexerDescriptor_WithMode">WithMode(BindingMode)</a></td>
<td>Modifies the binding mode.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_IndexerDescriptor_WithPriority">WithPriority(BindingPriority)</a></td>
<td>Modifies the binding priority.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Data_IndexerDescriptor_op_LogicalNot">LogicalNot(IndexerDescriptor)</a></td>
<td>Makes a two-way binding.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_IndexerDescriptor_op_OnesComplement">OnesComplement(IndexerDescriptor)</a></td>
<td>Makes a two-way binding.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_StreamBindingExtensions_StreamBinding__1">StreamBinding(Object)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_StreamBindingExtensions">StreamBindingExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_ToBinding__1">ToBinding(Object)()</a></td>
<td>Converts an <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable(T)</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

