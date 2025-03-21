# Geometry Class


Defines a geometric shape.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(GeometryTypeConverter))]
public abstract class Geometry : AvaloniaObject
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(GeometryTypeConverter))>
Public MustInherit Class Geometry
	Inherits AvaloniaObject
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<TypeConverterAttribute(typeof(GeometryTypeConverter))>]
type Geometry = 
    class
        inherit AvaloniaObject
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Geometry.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  Geometry</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Media_CombinedGeometry">Avalonia.Media.CombinedGeometry</a><br /><a href="T_Avalonia_Media_EllipseGeometry">Avalonia.Media.EllipseGeometry</a><br /><a href="T_Avalonia_Media_GeometryGroup">Avalonia.Media.GeometryGroup</a><br /><a href="T_Avalonia_Media_LineGeometry">Avalonia.Media.LineGeometry</a><br /><a href="T_Avalonia_Media_PolylineGeometry">Avalonia.Media.PolylineGeometry</a><br /><a href="T_Avalonia_Media_RectangleGeometry">Avalonia.Media.RectangleGeometry</a><br /><a href="T_Avalonia_Media_StreamGeometry">Avalonia.Media.StreamGeometry</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_Geometry_Bounds">Bounds</a></td>
<td>Gets the geometry's bounding rectangle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Geometry_ContourLength">ContourLength</a></td>
<td>Gets the geometry's total length as if all its contours are placed in a straight line.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td>Gets or sets the parent object that inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> values are inherited from.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td>Gets or sets the value of a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td>Gets or sets a binding for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_Geometry_Transform">Transform</a></td>
<td>Gets or sets a transform to apply to the geometry.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_Geometry_AffectsGeometry">AffectsGeometry(AvaloniaProperty[])</a></td>
<td>Marks a property as affecting the geometry's PlatformImpl.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind">Bind(AvaloniaProperty, IBinding)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind_1">Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_2">Bind(T)(DirectPropertyBase(T), IObservable(T))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1">Bind(T)(DirectPropertyBase(T), IObservable(BindingValue(T)))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_1">Bind(T)(DirectPropertyBase(T), IObservable(Object))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_5">Bind(T)(StyledProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_3">Bind(T)(StyledProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_4">Bind(T)(StyledProperty(T), IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CheckAccess">CheckAccess()</a></td>
<td>Returns a value indicating whether the current thread is the UI thread.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue">ClearValue(AvaloniaProperty)</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1">ClearValue(T)(AvaloniaProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_1">ClearValue(T)(DirectPropertyBase(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_2">ClearValue(T)(StyledProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_Clone">Clone()</a></td>
<td>Clones the geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td>Coerces the specified <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_Combine">Combine(Geometry, RectangleGeometry, GeometryCombineMode, Transform)</a></td>
<td>Combines the two geometries using the specified <a href="T_Avalonia_Media_GeometryCombineMode">GeometryCombineMode</a> and applies the specified transform to the resulting geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Equals">Equals(Object)</a></td>
<td>Compares two objects using reference equality.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_FillContains">FillContains(Point)</a></td>
<td>Indicates whether the geometry's fill contains the specified point.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td>Gets the hash code for the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_GetRenderBounds">GetRenderBounds(IPen)</a></td>
<td>Gets the geometry's bounding rectangle with the specified pen.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue">GetValue(AvaloniaProperty)</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1">GetValue(T)(DirectPropertyBase(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1_1">GetValue(T)(StyledProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_GetWidenedGeometry">GetWidenedGeometry(IPen)</a></td>
<td>Gets a Geometry that is the shape defined by the stroke on the Geometry produced by the specified Pen.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_InvalidateGeometry">InvalidateGeometry()</a></td>
<td>Invalidates the platform implementation of the geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is animating.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is set on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td>Called when a avalonia property changes on the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td>Called when a avalonia property changes on the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_Parse">Parse(String)</a></td>
<td>Creates a Geometry from a string.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Raises the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event for a direct property.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetAndRaise__1">SetAndRaise(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Sets the backing field for a direct avalonia property, raising the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event if the value has changed.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue(AvaloniaProperty, Object)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue">SetValue(AvaloniaProperty, Object, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1">SetValue(T)(DirectPropertyBase(T), T)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1_1">SetValue(T)(StyledProperty(T), T, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_StrokeContains">StrokeContains(IPen, Point)</a></td>
<td>Indicates whether the geometry's stroke contains the specified point.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_TryGetPointAndTangentAtDistance">TryGetPointAndTangentAtDistance(Double, Point, Point)</a></td>
<td>Attempts to get the corresponding point and tangent from the specified distance along the contour of the geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_TryGetPointAtDistance">TryGetPointAtDistance(Double, Point)</a></td>
<td>Attempts to get the corresponding point at the specified distance</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_Geometry_TryGetSegment">TryGetSegment(Double, Double, Boolean, Geometry)</a></td>
<td>Attempts to get the corresponding path segment given by the two distances specified. Imagine it like snipping a part of the current geometry.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td>Called to update the validation state for properties for which data validation is enabled.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_VerifyAccess">VerifyAccess()</a></td>
<td>Checks that the current thread is the UI thread and throws if not.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Media_Geometry_Changed">Changed</a></td>
<td>Raised when the geometry changes.</td>
</tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_Geometry_TransformProperty">TransformProperty</a></td>
<td>Defines the <a href="P_Avalonia_Media_Geometry_Transform">Transform</a> property.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind">Bind(AvaloniaProperty, IBinding, Object)</a></td>
<td>Binds a property on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1">Bind(T)(AvaloniaProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1_1">Bind(T)(AvaloniaProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue">GetBaseValue(AvaloniaProperty)</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue__1">GetBaseValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1_1">GetBindingObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1">GetBindingObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__2">GetBindingObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject">GetBindingSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject__1">GetBindingSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td>Gets a diagnostic for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1_1">GetObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1">GetObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__2">GetObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetPropertyChangedObservable">GetPropertyChangedObservable(AvaloniaProperty)</a></td>
<td>Gets an observable that listens for property changed events for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject">GetSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject__1">GetSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td>Gets a value store diagnostics for a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

